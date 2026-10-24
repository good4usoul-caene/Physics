
### Single Radar Method
The animation [Einstein Synchronization Convention | Desmos](https://www.desmos.com/calculator/6ysgrbngci) shows the original signal going out as purple round dots.  The reflection signal comes back in the form of faded blue rectangles, and the central station in the demo goes ahead and multiplies it's time by 1.5 so that each clock sets its time to the value sent, rather than having to do an extra calculation.

 - **Signal 1** *Artifact Establishment* The artifact sets time to zero, and sends out one massive signal at $t=0$
 - **Signal 1 Bounce** Each object (at distance $r_\text{object}$) in the vicinity of the artifact reflects the signal at $t=r_\text{object}/c$ 
 - **Signal 1 Detection** The radar system detects the bounced signal at $t=2r_\text{object}/c$.
 - **Object Sync Signal** The radar system sends an object identifying signal along with the time stamp $t_{set}(\text{unique object})=1.5 t$.
 - **Expense** The central artifact must broadcast a different value of $1.5 t$ for each object.  All of the clocks need to be able to detect this signal, and pick out their own identifier and its synchronizing-time from among the noise of times aimed at other clocks.

### Distant Artifact Method 
 - **Signal 1** *Artifact Establishment:* The first signal must establish what artifact is being used.  This information must be communicated to all of the clocks before any sync procedure can begin.
 - **Signal 2** *The continuous time signal*: The distant artifact must continuously broadcast a signal that states its time.  
 - **Signal 3** *Radar Signal* Each Clock must send a radar signal to the artifact to determine its distance.  The distance estimate will be $2 d=c\Delta t$
- **Setting**  Each clock will combine Signal 3 (adding the radar delay $d/c$) and Signal 2:  (the continuous time signal) to get an estimate for its current time.  
- **Expense:** Every clock has to be equipped with its own radar.  Each radar needs to have a distinct identifier to distinguish it from other radar signals.
- The accuracy of the estimate depends on the motion and acceleration of the artifact and the clock.







