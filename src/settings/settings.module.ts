import { Module, Global } from '@nestjs/common';
// Services 
import { InitializeSettingService } from './services/initialize.service'
// Controllers
import { InitializeSettingController } from './controllers/initialize.controller';


@Global()
@Module({
    imports: [],
    controllers: [InitializeSettingController ],
    providers: [InitializeSettingService],
    exports: [InitializeSettingService]
})
export class SettingsModule { }
