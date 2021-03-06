import {FeatureAppManager, FeatureServiceRegistry} from '@feature-hub/core';
import {loadAmdModule} from '@feature-hub/module-loader';
import {FeatureAppContainer, FeatureAppLoader} from '@feature-hub/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import counterDefinition from './counter';
import counterControlDefinition from './counter-control';
import counterDisplayDefinition from './counter-display';
import counterResetDefinition from './counter-reset';

const registry = new FeatureServiceRegistry({});

registry.registerProviders([counterDefinition], 'counter-web-app');

const manager = new FeatureAppManager(registry, loadAmdModule);

ReactDOM.render(
  <div>
    <FeatureAppContainer
      manager={manager}
      featureAppDefinition={counterControlDefinition}
    />
    <FeatureAppContainer
      manager={manager}
      featureAppDefinition={counterResetDefinition}
    />
    <FeatureAppContainer
      manager={manager}
      featureAppDefinition={counterDisplayDefinition}
    />
  </div>,
  document.getElementById('app')
);
