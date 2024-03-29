import { Component, Input } from '@angular/core';

import { Alert, AlertType } from './alert';
import { AlertService } from './alert.service';

@Component({
    selector: 'ap-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent {

    @Input() timeout = 3000;
    alerts: Alert[] = [];

    constructor(
        private service: AlertService
    ) {
        this.service
            .getAlert()
            .subscribe(alert => {
                if (!alert) {
                    this.alerts = [];
                    return;
                }
                this.alerts.push(alert);
                setTimeout(() => this.remoteAlert(alert), this.timeout);
            });
    }

    remoteAlert(alertToRemove: Alert) {
        this.alerts = this.alerts.filter(alert => alert !== alertToRemove);
    }

    getAlertClass(alert: Alert) {
        if (!alert) {
            return '';
        }
        switch (alert.alertType) {
            case AlertType.DANGER:
                return 'alert alert-danger';
            case AlertType.INFO:
                return 'alert alert-info';
            case AlertType.SUCCESS:
                return 'alert alert-success';
            case AlertType.WARNING:
                return 'alert alert-warning';
        }
    }
}