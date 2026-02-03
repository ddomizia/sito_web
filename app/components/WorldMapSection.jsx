"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function WorldMapSection({ mapProjects }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: {
        version: 8,
        sources: {
          land: {
            type: "geojson",
            data: "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson",
          },
          boundaries: {
            type: "geojson",
            data: "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_boundary_lines_land.geojson",
          },
        },
        layers: [
          {
            id: "background",
            type: "background",
            paint: { "background-color": "#ffffff" },
          },
          {
            id: "land",
            type: "fill",
            source: "land",
            paint: { "fill-color": "#c9ced3" },
          },
          {
            id: "boundaries",
            type: "line",
            source: "boundaries",
            paint: {
              "line-color": "#ffffff",
              "line-width": 0.5,
            },
          },
        ],
      },
      center: [15, 40],
      zoom: 3,
      attributionControl: false,
    });

    mapRef.current = map;
    map.scrollZoom.disable();
    map.addControl(new maplibregl.NavigationControl(), "top-right");

    map.on("load", () => {
      /* ===================== */
      /*      PROJECT DATA     */
      /* ===================== */

      const geojson = {
        type: "FeatureCollection",
        features: mapProjects.map((p) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [p.lng, p.lat],
          },
          properties: {
            labelCity: p.labelCity,
            labelProject: p.labelProject,
          },
        })),
      };

      map.addSource("projects", {
        type: "geojson",
        data: geojson,
        cluster: true,
        clusterRadius: 45,
        clusterMaxZoom: 5,
      });

      /* ===================== */
      /*        CLUSTERS       */
      /* ===================== */

      map.addLayer({
        id: "clusters-core",
        type: "circle",
        source: "projects",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": "#ec4899",
          "circle-radius": [
            "step",
            ["get", "point_count"],
            7,
            3, 9,
            6, 12,
          ],
          "circle-stroke-width": 1,
          "circle-stroke-color": "#ffffff",
        },
      });

      map.addLayer({
        id: "clusters-pulse",
        type: "circle",
        source: "projects",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": "#ec4899",
          "circle-opacity": 0.35,
          "circle-radius": [
            "step",
            ["get", "point_count"],
            7,
            3, 9,
            6, 12,
          ],
        },
      });

      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "projects",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-size": 10,
        },
        paint: { "text-color": "#ffffff" },
      });

      /* ===================== */
      /*     SINGLE POINTS     */
      /* ===================== */

      map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "projects",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#ec4899",
          "circle-radius": 5,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#ffffff",
        },
      });

      map.addLayer({
        id: "unclustered-pulse",
        type: "circle",
        source: "projects",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#ec4899",
          "circle-radius": 5,
          "circle-opacity": 0.35,
        },
      });

      /* ===================== */
      /*        PULSE          */
      /* ===================== */

      let pulse = 0;
      let growing = true;

      function animatePulse() {
        pulse += growing ? 0.04 : -0.04;
        if (pulse > 6) growing = false;
        if (pulse < 0) growing = true;

        map.setPaintProperty(
          "unclustered-pulse",
          "circle-radius",
          ["+", 5, pulse],
        );

        map.setPaintProperty(
          "clusters-pulse",
          "circle-radius",
          [
            "+",
            [
              "step",
              ["get", "point_count"],
              7,
              3, 9,
              6, 12,
            ],
            pulse,
          ],
        );

        requestAnimationFrame(animatePulse);
      }

      animatePulse();

      /* ===================== */
      /*         POPUP         */
      /* ===================== */

      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        anchor: "left",
        offset: [28, 0],
        maxWidth: "220px",
        autoPan: false,
        className: "map-label-popup",
      });

      map.on("mouseenter", "unclustered-point", (e) => {
        map.getCanvas().style.cursor = "pointer";

        const { labelCity, labelProject } = e.features[0].properties;
        const coordinates = e.features[0].geometry.coordinates.slice();

        // 🔑 FORZATURA A CAPO
        const formattedProjects = labelProject
  .split("\n")
  .map(
    (line) =>
      `<div class="flex items-start gap-1">
         <span class="shrink-0">-</span>
         <span>${line.replace(/^-\s*/, "")}</span>
       </div>`,
  )
  .join("");

popup
  .setLngLat(coordinates)
  .setHTML(`
    <div
      class="bg-black/60 px-3 py-2 text-[11px] text-white backdrop-blur-sm"
      style="
        max-width: 260px;
        line-height: 1.4;
      "
    >
      <div class="font-semibold mb-1">${labelCity}</div>
      <div class="text-[10px] text-white/80 space-y-0.5">
        ${formattedProjects}
      </div>
    </div>
  `)
  .addTo(map);

      });

      map.on("mouseleave", "unclustered-point", () => {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });

      /* ===================== */
      /*      FIT BOUNDS       */
      /* ===================== */

      const bounds = new maplibregl.LngLatBounds();
      geojson.features.forEach((f) =>
        bounds.extend(f.geometry.coordinates),
      );

      if (!bounds.isEmpty()) {
        map.fitBounds(bounds, {
          padding: 80,
          maxZoom: 5,
          duration: 0,
        });
      }
    });

    return () => map.remove();
  }, [mapProjects]);

  return (
    <section
      id="progetti-mappa"
      className="border-t border-neutral-200 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
          Dove operiamo
        </p>
        <h2 className="mt-1 text-2xl font-semibold md:text-3xl">
          I nostri luoghi di progetto
        </h2>
      </div>

      <div className="mt-8 h-[420px] w-full md:h-[520px]">
        <div ref={mapContainerRef} className="h-full w-full" />
      </div>
    </section>
  );
}
