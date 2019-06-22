import { Component, Input, OnInit } from '@angular/core';
import { featureGroup, icon, latLng, marker, Point, tileLayer } from 'leaflet';

import { MapCoordinate } from './map';

@Component({
  selector: 'cs-map-widget',
  templateUrl: './map-widget.component.html',
  styleUrls: ['./map-widget.component.scss']
})
export class MapWidgetComponent implements OnInit {
  @Input() mapCoordinates: MapCoordinate[] = [];
  @Input() infoTitle: string;
  leafletOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/" target="_blank">Mapbox</a>',

      })], zoom: 5, center: latLng(-25.4383361, -49.3658624)
  };
  leafletLayers = [];
  leafletMarkerGroup;
  leafletFitBounds;

  constructor() { }

  ngOnInit() {
  }

  private configureLeaflet() {
    const defaultMarker = this.getMapMarker();
    this.leafletLayers = [];
    this.mapCoordinates.forEach(coord => {
      this.leafletLayers.push(
        marker([coord.latitude, coord.longitude], { icon: icon({ iconSize: [32, 32], iconAnchor: [32, 32], iconUrl: defaultMarker }) })
          .bindPopup(`<div style="display: flex;flex: 1 1 100%;flex-direction: column;">
          <span class="h4 text-bold">${this.infoTitle}:</span>
          <span>${coord.name}</span>
        </div>`, { offset: new Point(-16, -32) })
          .bindTooltip(`<span>${coord.name}</span>`, { offset: new Point(-16, -32), direction: 'top' })
      );
    });
    this.leafletMarkerGroup = featureGroup(this.leafletLayers);
    this.leafletFitBounds = this.leafletMarkerGroup.getBounds();
  }

  getMapMarker(color: string = '#dd4a40') {
    return 'data:image/svg+xml;base64,' + btoa(`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32pt" height="32pt" viewBox="0 0 32 32" version="1.1"><g><path style="fill:${color}" d="M 20.570312 11.429688 C 20.570312 10.167969 20.125 9.089844 19.230469 8.195312 C 18.339844 7.304688 17.261719 6.855469 16 6.855469 C 14.738281 6.855469 13.660156 7.304688 12.769531 8.195312 C 11.875 9.089844 11.429688 10.167969 11.429688 11.429688 C 11.429688 12.691406 11.875 13.769531 12.769531 14.660156 C 13.660156 15.554688 14.738281 16 16 16 C 17.261719 16 18.339844 15.554688 19.230469 14.660156 C 20.125 13.769531 20.570312 12.691406 20.570312 11.429688 Z M 25.144531 11.429688 C 25.144531 12.726562 24.945312 13.792969 24.554688 14.625 L 18.054688 28.445312 C 17.863281 28.839844 17.582031 29.148438 17.207031 29.375 C 16.832031 29.601562 16.429688 29.714844 16 29.714844 C 15.570312 29.714844 15.167969 29.601562 14.792969 29.375 C 14.417969 29.148438 14.144531 28.839844 13.964844 28.445312 L 7.445312 14.625 C 7.054688 13.792969 6.855469 12.726562 6.855469 11.429688 C 6.855469 8.902344 7.75 6.75 9.535156 4.964844 C 11.320312 3.179688 13.476562 2.285156 16 2.285156 C 18.523438 2.285156 20.679688 3.179688 22.464844 4.964844 C 24.25 6.75 25.144531 8.902344 25.144531 11.429688 Z M 25.144531 11.429688 "/></g></svg>`);
  }

}
