import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { TradingController } from './api/trading/trading.controller';
import { CoinbaseService } from './services/coinbase/coinbase.service';
import { ConfigService } from './services/config/config.service';
import { ProfitGatheringService } from './services/profit-gathering/profit-gathering.service';
import { TradeAnalysisService } from './services/trade-analysis/trade-analysis.service';
import { TradingService } from './services/trading/trading.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [TradingController],
  providers: [
    ConfigService,
    CoinbaseService,
    TradeAnalysisService,
    {
      provide: 'PROFIT_THRESHOLD',
      useValue: 10, // Configure the profit threshold value here
    },
    ProfitGatheringService,
    TradingService,
  ],
})
export class AppModule {}
