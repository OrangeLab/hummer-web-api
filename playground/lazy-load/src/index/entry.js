import * as Tenon from '@hummer/tenon-vue';
import app from './app';
import webAPI from '../../../../src/index.ts';
webAPI.install()

Tenon.render(app);
