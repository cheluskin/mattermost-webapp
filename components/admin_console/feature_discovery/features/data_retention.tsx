// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {t} from 'utils/i18n';
import saml from 'images/feature-discovery/saml.png';

import FeatureDiscovery from '../index';

const DataRetentionFeatureDiscovery: React.FC = () => {
    return (
        <FeatureDiscovery
            featureName='data_retention'
            titleID='admin.data_retention_feature_discovery.title'
            titleDefault='Create data retention schedules with Mattermost Enterprise E20'
            copyID='admin.data_retention_feature_discovery.copy'
            copyDefault={'Hold on to your data only as long as you need to. Create data retention jobs for select channels and teams to automatically delete disposable data.'}
            learnMoreURL='https://docs.mattermost.com/administration/data-retention.html'
            imgPath={saml}
        />
    );
};

t('admin.data_retention_feature_discovery.title');
t('admin.data_retention_feature_discovery.copy');

export default DataRetentionFeatureDiscovery;