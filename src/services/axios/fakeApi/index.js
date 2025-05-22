import mock from './mock'
import './auth'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

mock.onAny().passThrough()
