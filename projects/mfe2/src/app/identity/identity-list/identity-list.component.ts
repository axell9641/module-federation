import { Component, OnInit } from '@angular/core';
import { IdentitiesService, ListIdentitiesResponse } from '../services/identities.service';

@Component({
  selector: 'app-identity-list',
  templateUrl: './identity-list.component.html',
  styleUrls: ['./identity-list.component.scss']
})
export class IdentityListComponent implements OnInit {
  result: ListIdentitiesResponse;
  constructor(private indetityService: IdentitiesService) { }

  ngOnInit(): void {
    this.indetityService.getIdentities('').subscribe (result => {
      this.result = result;
    });
  }

}
