import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { WalletCardComponent } from './components/wallet-card/wallet-card.component';
import { VouchersCardComponent } from './components/vouchers-card/vouchers-card.component';
import { BonusCardComponent } from './components/bonus-card/bonus-card.component';
import { PinnedTokensComponent } from './components/pinned-tokens/pinned-tokens.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, WalletCardComponent, VouchersCardComponent, BonusCardComponent, PinnedTokensComponent]
})
export class Tab1PageModule { }
