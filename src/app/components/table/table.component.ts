import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';

import { FileSaverModule, FileSaverService } from 'ngx-filesaver';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,PaginatorModule,FileSaverModule,TooltipModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {





   ticketsData = [
    {
      id:1,
      user: "محمد احمد",
      userPhone: "0123456789",
      image: "user1",
      ticketNumber: "C-101",
      ticketValue: "40$",
      cinemas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",
      numberOfPeople: 1,
      numberOfPurchases: "مرة واحدة",

    },
    {
      id:2,
      user: "محمد الغريب",
      userPhone: "0123456789",
      image: "user2",
      ticketNumber: "C-102",
      ticketValue: "30$",
      cinemas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
      numberOfPeople: 1,
      numberOfPurchases: "مرة واحدة",

    },
    {
      id:2,
      user: "محمد الغريب",
      userPhone: "0123456789",
      image: "user3",
      ticketNumber: "C-102",
      ticketValue: "30$",
      cinemas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
      numberOfPeople: 1,
      numberOfPurchases: "مرة واحدة",

    },
    {
      id:4,
      user: "محمد الغريب",
      userPhone: "0123456789",
      image: "user4",
      ticketNumber: "C-102",
      ticketValue: "50$",
      cinemas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
      numberOfPeople: 1,
      numberOfPurchases: "مرة واحدة",

    },
  ];



}
