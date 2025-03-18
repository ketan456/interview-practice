import { HttpContextToken } from '@angular/common/http';

export const COMPONENT_IDENTIFIER = new HttpContextToken<string>(() => 'unknown');