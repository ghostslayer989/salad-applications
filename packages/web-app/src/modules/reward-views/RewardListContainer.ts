import { connect, MapStoreToProps } from '../../connect'
import { RewardList } from './components/RewardList'

const mapStoreToProps: MapStoreToProps = store => ({
  rewards: store.rewards.filteredRewards,
  onRewardClick: store.rewards.showDetailModal,
})

export const RewardListContainer = connect(
  mapStoreToProps,
  RewardList,
)