// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {ComponentProps} from 'react';
import {connect} from 'react-redux';

import {getInt, isCollapsedThreadsEnabled} from 'mattermost-redux/selectors/entities/preferences';

import {getCurrentTeamId, getCurrentRelativeTeamUrl} from 'mattermost-redux/selectors/entities/teams';
import {getCurrentUserId} from 'mattermost-redux/selectors/entities/users';

import {setThreadFollow} from 'mattermost-redux/actions/threads';
import {getThreadOrSynthetic} from 'mattermost-redux/selectors/entities/threads';
import {getPost} from 'mattermost-redux/selectors/entities/posts';

import {GlobalState} from 'types/store';

import {
    setRhsExpanded,
    showMentions,
    showSearchResults,
    showFlaggedPosts,
    showPinnedPosts,
    showChannelFiles,
    closeRightHandSide,
    toggleRhsExpanded,
} from 'actions/views/rhs';
import {getIsRhsExpanded} from 'selectors/rhs';
import {CrtThreadPaneSteps, Preferences} from 'utils/constants';

import RhsHeaderPost from './rhs_header_post';

type OwnProps = Pick<ComponentProps<typeof RhsHeaderPost>, 'rootPostId'>

function mapStateToProps(state: GlobalState, {rootPostId}: OwnProps) {
    const root = getPost(state, rootPostId);
    const currentUserId = getCurrentUserId(state) as string;
    const tipStep = getInt(state, Preferences.CRT_THREAD_PANE_STEP, currentUserId);
    const showThreadsTutorialTip = tipStep === CrtThreadPaneSteps.THREADS_PANE_POPOVER;

    return {
        isExpanded: getIsRhsExpanded(state),
        relativeTeamUrl: getCurrentRelativeTeamUrl(state),
        currentTeamId: getCurrentTeamId(state),
        currentUserId,
        isCollapsedThreadsEnabled: isCollapsedThreadsEnabled(state),
        showThreadsTutorialTip,
        isFollowingThread: isCollapsedThreadsEnabled(state) && root && getThreadOrSynthetic(state, root).is_following,
    };
}

const actions = {
    setRhsExpanded,
    showSearchResults,
    showMentions,
    showFlaggedPosts,
    showPinnedPosts,
    showChannelFiles,
    closeRightHandSide,
    toggleRhsExpanded,
    setThreadFollow,
};

export default connect(mapStateToProps, actions)(RhsHeaderPost);
