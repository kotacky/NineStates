import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

import { SampleService } from '../../services/sample/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private service: SampleService) { }

  ngOnInit() {
  }

  /** TEST GET ボタン押下時 */
  async testGetBtn(): Promise<void> {
    const res = await this.service.getReq();
    console.log('\n=== res ===');
    console.log(res);
  }

  /** TEST POST ボタン押下時 */
  async testPostBtn(): Promise<void> {
    const res = await this.service.postReq();
    console.log('\n=== res ===');
    console.log(res);
  }
}
