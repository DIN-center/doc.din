# Watchers

Watchers have the following responsibilities:

- **Real-time monitoring** - Watchers play a vital role in the load-sharing process by continuously tracking and validating operator response times, accuracy, and SLA compliance.
  This monitoring data is published to the public bulletin board, allowing the DAO and users to assess operator reliability and request routing.

- **Load redistribution** - If a node provider underperforms or faces connectivity issues, watchers flag the issue, and requests are automatically rerouted to maintain service continuity.
  EigenLayer's AVS integration supports slashing penalties for operators that fail to meet performance benchmarks, encouraging operators to maintain consistent and reliable service.

To participate in DIN, a watcher must [onboard as an AVS operator](../avs/operator-onboarding/index.md).

Watchers join the DIN AVS through EigenLayer restaking (or staking tokens in the staking contract).
Their stake serves as collateral, with penalties enforced through EigenLayer's slashing protocols for any lapses in performance or accuracy.
The watcher set is open membership such that anyone can join given their economic staking and report on the DIN network's reliability.
The quantity of required stake is adjusted by the DAO.

Watchers are rewarded within the EigenLayer ecosystem for running as an operator.
Watchers can also earn rewards for completing tests on fulfilling bounties for onboarding DIN nodes.

See [DIN as an AVS](../avs/index.md) for more information about watchers' roles in the AVS.
