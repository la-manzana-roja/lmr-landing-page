import { Component, OnInit } from '@angular/core';

import { MetricsService } from './metrics.service';
import { Observable } from 'rxjs';
import { Metric } from 'src/app/shared/models/metric';

@Component({
  selector: 'lmr-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  metrics$: Observable<Metric[]>;

  constructor(private metricsService: MetricsService) {}

  ngOnInit() {
    this.metrics$ = this.metricsService.getAll();
  }
}
