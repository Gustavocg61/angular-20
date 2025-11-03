import {Component, OnInit} from '@angular/core';
import {ReceberApi} from '../../services/receber-api';
import {CardCotation} from '../../shared/card-cotation/card-cotation';

@Component({
  selector: 'app-aapl',
  imports: [
    CardCotation
  ],
  templateUrl: './aapl.html',
  styleUrl: './aapl.scss',
})
export class Aapl implements OnInit {
  aapl!: {
    requestedAT: string;
    took: string;
    results: {
      currency: string;
      marketCap: number;
      shortName: string;
      longName: string;
      regularMarketChange: number;
      regularMarketChangePercent: number;
      regularMarketTime: string;
      regularMarketPrice: number;
      regularMarketDayHigh: number;
      regularMarketDayRange: string;
      regularMarketDayLow: number;
      regularMarketVolume: number;
      regularMarketPreviousClose: number;
      regularMarketOpen: number;
      fiftyTwoWeekRange: string;
      fiftyTwoWeekLow: number;
      fiftyTwoWeekHigh: number;
      symbol: string;
      logourl: string;
      priceEarnings: number;
      earningsPerShare: number;
      dividendsData: ObjectConstructor[]
    }[]
  };

  constructor(private service: ReceberApi){
    this.getData()
  }

  getData(): void {
    this.service.getAAPL().subscribe(response => {
      this.aapl = {
        requestedAT: response.General.Type,
        took: response.General.Name,
        results:  [
          {
            currency: 'BRL',
            marketCap: 391749037811,
            shortName: 'ITAUUNIBANCOPN      N1',
            longName: 'Itaú Unibanco Holding S.A.',
            regularMarketChange: 0.15,
            regularMarketChangePercent: 0.382,
            regularMarketTime: '2025-10-31T20:07:33.000Z',
            regularMarketPrice: 39.44,
            regularMarketDayHigh: 39.63,
            regularMarketDayRange: '39.32 - 39.63',
            regularMarketDayLow: 39.32,
            regularMarketVolume: 15894700,
            regularMarketPreviousClose: 39.29,
            regularMarketOpen: 38.36,
            fiftyTwoWeekRange: '27.109 - 39.68',
            fiftyTwoWeekLow: 27.109,
            fiftyTwoWeekHigh: 39.68,
            symbol: 'ITUB4',
            logourl: 'https://icons.brapi.dev/icons/ITUB4.svg',
            priceEarnings: 9.841959403789978,
            earningsPerShare: 4.0395859,
            dividendsData: [Object]
          }
        ]
      }
    })
  }

  ngOnInit(): void{
    this.getData();
  }
}
