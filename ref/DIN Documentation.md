# ![][image1] DIN Documentation Home

| This is a starting point for public facing DIN documentation likely needed in our Gitbook hierarchy implementation. This preview can also be useful to the DIN Gateway Program and walkthrough of the AVS Operator setups. See: [DIN Beta Gateway Program Steps](?tab=t.xk1a87o4o2v0#heading=h.thzabqxoaicu) See Notion Page: [DIN Gateway Program \[Beta\] Portal](https://www.notion.so/DIN-Gateway-Program-Beta-Portal-188fc61a326e80ce9274e13a22490274?pvs=21) (May have access issues) See: [DIN as an AVS Ephemeral Testnet](?tab=t.n6had1vv8i5q#heading=h.t5nlray83698) |
| :---- |
| DIN’s Whitepaper and Litepaper has detailed specifications for the DIN protocol. This is available on [https://din.build](https://din.build) |

# Contents

* [Introduction](?tab=t.h6ekge9h6u0k#heading=h.8fe6i0j82lpz)  
  * [Glossary of Terms](?tab=t.h6ekge9h6u0k#heading=h.yimv0okx3m1p)  
  * [DIN Brand Resources](?tab=t.h6ekge9h6u0k#heading=h.uad4rh7tozk1)  
* [DIN Architecture Overview](?tab=t.76r7uogl3vjq#heading=h.1i2g6iz34wgw)  
  * [How DIN Works](?tab=t.76r7uogl3vjq#heading=h.ko94drvcjcg2)  
* [DIN Web3 Gateways](?tab=t.xk1a87o4o2v0#heading=h.a9l3uud98qtp)

  * [DIN Gateway Product Overview](?tab=t.xk1a87o4o2v0#heading=h.gnruteyeb4an)

    * [DIN Beta Gateway Program](?tab=t.xk1a87o4o2v0#heading=h.thzabqxoaicu)

  * [DIN Authentication Process](?tab=t.xk1a87o4o2v0#heading=h.2ah4a019ncpy)

  * [DIN Router Initial Registration](?tab=t.xk1a87o4o2v0#heading=h.n239sv5o333l)

  * [DIN Router Network Configuration](?tab=t.xk1a87o4o2v0#heading=h.5i4lkp8fumbb)

  * [DIN Monitoring and Data Available for Consumption](?tab=t.xk1a87o4o2v0#heading=h.6vofe98bkvn8)

  * [Troubleshooting Tools](?tab=t.xk1a87o4o2v0#heading=h.p4pn2a4jpdwd)

  * [DIN Service Contracts, Fees, & Rewards](?tab=t.xk1a87o4o2v0#heading=h.8m6o6zwyir0e)

  * [Lessons Learned from Infura](?tab=t.xk1a87o4o2v0#heading=h.ozfie5dad7gt)

  * [BD and New Networks](?tab=t.xk1a87o4o2v0#heading=h.ouwwpwspwwa)  
* [DIN as an AVS](?tab=t.n6had1vv8i5q#heading=h.x1wvyo55jmjz)

  * [Core Concepts](?tab=t.n6had1vv8i5q#heading=h.in2z0zzer1oc)

  * [DIN Interactions and Flows](?tab=t.n6had1vv8i5q#heading=h.96uduh7g3vad)

  * [DIN as an AVS Economics](?tab=t.n6had1vv8i5q#heading=h.whh4k645bsjc)

  * [Node Operators](?tab=t.n6had1vv8i5q#heading=h.7vtei3qkjkeu)

    * [Requirements](?tab=t.n6had1vv8i5q#heading=h.y2gyfebyi1md)

    * [Setup](?tab=t.n6had1vv8i5q#heading=h.ixvom7tlj96q)

    * [Metrics and Monitoring](?tab=t.n6had1vv8i5q#heading=h.5kdvzbo1ez40)

    * [Troubleshooting](?tab=t.n6had1vv8i5q#heading=h.jz7bn9nuba5n)

  * [Network Information](?tab=t.n6had1vv8i5q#heading=h.7lnwxueorx12)  
* [DIN Providers](?tab=t.cr6gvqmxifr3#heading=h.4nosypl3h7u1)  
* [DIN Network Coverage](?tab=t.3jpaaj6i1cz2#heading=h.4bbftyz0lktm)  
  * [DIN Network Selection Considerations](?tab=t.3jpaaj6i1cz2#heading=h.osk4i6b3xrzn)  
  * [Core Method Requirements](?tab=t.3jpaaj6i1cz2#heading=h.4bol10fvpbnk)  
  * [DIN Networks covered by Method on Infura](?tab=t.3jpaaj6i1cz2#heading=h.qc0jkpsgsmzm)  
* [Reference](?tab=t.12nkgyv60c7#heading=h.65fcjnr91fsm)  
  * [DIN Protocol Specs](?tab=t.12nkgyv60c7#heading=h.tmshajtq4r6t)  
  * [DIN Case Study \- Blast L2 Mainnet Launch](?tab=t.12nkgyv60c7#heading=h.2l23vfjhyzr3)  
  * [DIN Case Study \- Infura & MetaMask](?tab=t.12nkgyv60c7#heading=h.58slxkn1xqoa)  
  * [DIN Mechanism Design](?tab=t.12nkgyv60c7#heading=h.aob6o7s0d84)  
* [Community & Resources](?tab=t.l83aia1ppkjv#heading=h.efzz3vranpf)  
  * [Roadmap & Future Plans](?tab=t.l83aia1ppkjv#heading=h.gxvy2b87ueac)  
  * [Community Builder Project Toolkit](?tab=t.l83aia1ppkjv#heading=h.o8yqyktsvi58)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAABaUlEQVR4Xt2UoU4EMRRF95+wgOEHkEhW4BBoNOEDIEHwAwRPgkMQFAq5DreCkEAIQbaEkjTpeW86ndn2zWZvcsRO7333qp3NVpA/2PI56G8qlpfCO9XEorHw7mjxcC3YM0g8Vhv2FYlHWsHerBhuDftVMWQFdySi2RruiaLRGu4JomkquGs9h/FxasQw51wnDPf6r8+EX8v4+Y7wNB2mZk72pef2SviSUX1FDPf5RWa+K96DRxkWxmlF/vxYGDsLmc28ua9P+fb8oGY3dNjhtvjG30nWatjgb9bD/MWpdx/vAX9z2ekzG6a983uS3Yhh/C8L5tdFMiSEjvbkUXiI8BUOE//82WHwJIUdCN/KwxYv3v18J9ATvfBpmfjtbSnzT/f/b4938Vscpo2bimTUWg/7E03WcE8UjdZwTyKareAOVQy1hv1ZMdwK9haJR2rDvkHisVqwZ7R4eCy8W00sKoV3morlhP4h+gVcRVQSFFuZLAAAAABJRU5ErkJggg==>