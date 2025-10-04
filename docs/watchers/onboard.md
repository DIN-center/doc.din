# Onboard as a watcher

Watchers need to join the DIN AVS as an operator.
This requires the deleted staking to run the shared explorer and onboarding functionality.
The process of being added as an operator is handled by the EigenLayer components.

```mermaid
%%{
  init: {
    'sequence': {
      'actorMargin': 25,
      'width': 200
    }
  }
}%%

sequenceDiagram
    Watcher->>DIN App: Initiate operator onboarding
    DIN App->>EigenLayer components: Request staking process initiation
    EigenLayer components->>DIN App: Confirm staking requirements
    DIN App-->>Watcher: Display staking requirements and onboarding steps
    Watcher->>DIN App: Submit stake and operator metadata
    DIN App->>EigenLayer components: Process staked tokens
    EigenLayer components->>DIN AVS: Register watcher as operator
    DIN AVS-->>DIN App: Confirm successful registration
    DIN App-->>Watcher: Notify onboarding completion and operator status
```
