# Watchers

Watchers have the following responsibilities:

- **Real-time monitoring** - Watchers play a vital role in the load-sharing process by continuously tracking and validating operator response times, accuracy, and SLA compliance.
  This monitoring data is published to the public bulletin board, allowing the DAO and users to assess operator reliability and request routing.

- **Load redistribution** - If a node provider underperforms or faces connectivity issues, watchers flag the issue, and requests are automatically rerouted to maintain service continuity.
  EigenLayer's AVS integration supports slashing penalties for operators that fail to meet performance benchmarks, encouraging operators to maintain consistent and reliable service.

Watchers [join DIN as AVS operators](onboard.md) by staking via EigenLayer restaking (or DIN token registration through the staking contract).
Their stake serves as collateral, with penalties enforced through EigenLayer's slashing protocols for any lapses in performance or accuracy.
The watcher set is open membership such that anyone can join given their economic staking and report on the DIN network's reliability.
The quantity of required stake is adjusted by the DAO.

Watchers are rewarded within the EigenLayer ecosystem for running as an operator.
The watchers separately can earn for completing tests on fulfilling bounties for onboarding DIN nodes.

See [DIN as an AVS](../avs/index.md) for more information about watchers' roles in the AVS.
