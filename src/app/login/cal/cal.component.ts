import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


// Register French locale
registerLocaleData(localeFr);

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css'] // Corrected property name
})
export class CalComponent {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;

  events: CalendarEvent[] = [];
  activeDayIsOpen = false;
  refresh = new Subject<void>();

  constructor() {
    const event1: CalendarEvent = {
      title: "Cours de tennis",
      start: new Date("2024-04-27T01:30"),
      end: new Date("2024-04-27T13:30"),
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      }
    };
    this.events.push(event1);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventClicked(event: any) {
    console.log(event);
  }

  eventTimesChanged(event: any): void {
    event.event.start = event.newStart;
    event.event.end = event.newEnd;
    this.refresh.next();
  }


}
