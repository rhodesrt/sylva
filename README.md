[Sylva](https://www.rhodesrt.github.io/sylva) is a population dynamics simulator designed to mimic the conditions of a Savannah.

Inspired by the Lotka-Volterra equations and the Nicholson-Bailey model, which are both frequently used to describe the dynamics of biological systems in which two species interact, either as predator/prey or host/parasite, Sylva adds further complexity by introducing a ubiquitous substrate in the form of plant mass.

In accordance with the savannah analogy, the plant count is most represented by grass density, the grazer count could be represented by an ungulate population of wildebeest, bison, or zebra, and the predator count could be represented by a population of wolves, lions, or cheetahs.

In zoology, a population cycle is a phenomenon in which populations rise and fall over a predictable period of time. There are a number of factors which influence population change such as availability of food, predators, diseases and climate. In the case of Sylva, the relationship generally goes as follows:

Grass grows of its own accord due to the presence of sunlight. At a critical period of grass density, ungulates begin to multiply due to the high availability of food. As their populations rise, the predator population quickly follows, as its own food supply increases in the form of ungulate meat. As the ungulates grow too numerous, the grass dies out. In other words, the carrying capacity of the ecosystem in terms of ungulates decreases. Furthermore, the increased predator population threatens the ungulates, causing a more rapid rate of depletion. Soon after ungulate disappearance, the predator population decreases due to its own lack of food. At this point, the grasses are provided with a positive environment, and the cycle repeats itself.

Sylva is accomplished programmatically with JavaScript and React, as well as a charts.js line graphing tool.

If you would like to see the simulation in action, please click on this [Demo](https://www.rhodesrt.github.io/sylva)
