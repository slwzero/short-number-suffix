import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'short-number-suffix';
  data = [
    {num: 3,
      type: '个',
    },
    {num: 12,
      type: '十',
    },
    {num: 888,
    type: '百',
    },
    {num: 8888,
    type: '千',
    },
    {num: 88989,
    type: '万',
    },
    {num: 1234567,
    type: '百万',
    },
    {num: 12345678,
    type: '千万',
    },
    {num: 123456789,
    type: '亿',
      },
  ];
}
