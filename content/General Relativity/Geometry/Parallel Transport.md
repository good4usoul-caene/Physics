
Parallel transport is the process of carrying an arrow through space while trying not to turn it, and curvature is what prevents that goal from being globally consistent.

Einstein synchronization around a rotating frame is *said* to fail for essentially the same reason that parallel transport around a curved connection fails to return to its starting state.  

Curvature, holonomy, and the Sagnac effect are often described with the language of failure, inconsistency, or impossibility. But one can equally describe them as ordinary accumulations that occur when a quantity is transported around a loop.

For instance, if you walk around a circle, first measuring a length $2\pi r$ after one lap, then measuring, at the same point, $4\pi r$, then $6\pi r$, do you feel this is a "failure"?  No, of course not.  You would recognize that these values do not describe a property of the point itself. They describe different paths that begin and end at that point.

The apparent contradiction arises only after the path is forgotten. Once the route is discarded, several accumulated values become attached to the same point and appear inconsistent. But the inconsistency is not in the measurement. It is in the description. The quantities being compared are not properties of the point itself; they are properties of the paths that terminated there.

Let's look deeper into the example.

[Sagnac With Linear Sync Convention](https://www.desmos.com/calculator/fz1jylfqwn)

In the animation we observe a rotating disk coming into contact with a moving conveyor belt.  

We can assume that the conveyor belt has rulers and clocks.  And we can make some choices about how the rulers and clocks on the conveyor belt are set.

# Axle Inertial Frame vs Conveyor Inertial Frame
The words "in the inertial frame" ([[Abbreviations|IRF]]) is meant to describe the observer's state of motion, and which [[Euclidean Points and Parallel World Lines]] he regards as stationary.  
- The two main inertial frames under consideration are
	- Axle inertial frame:  Any observer who finds that the axle is stationary will be "in the axle inertial frame".  In the animation [Sagnac With Linear Sync Convention](https://www.desmos.com/calculator/fz1jylfqwn)  there is a background grid, and labeled axes.  Neither the rim nor the conveyor belt are stationary within this inertial frame.  The axle is the only physical object in the thought experiment that is tied to one of the Euclidean points.
	- Conveyor inertial frame:  Any observer who finds that the conveyor belt is stationary will be "in the conveyor inertial frame".  All of the physical particles of the conveyor belt will appear to be stationary in this frame.  The view of the disk from this perspective is difficult to model  [Rel-Roll-Wheel | Desmos](https://www.desmos.com/calculator/670c6e9ed0) at relativistic speeds because the speed of each point on the rim is different.  It drops to zero when the wheel touches the belt and speeds up and slows down.  
	-  There is no "Disk" or "Rim" inertial frame, because none of the physical particles are inertial. Except for a single rotating point-of-view at the center of the disk, all of the particles are continuously changing their trajectory.

# Three Questions
- Question 1: What is the speed of the clocks?  using the [[Two Clocks vs One Clock]] principle,  our two main options are:
	1.  Correct in the **conveyor IRF**: The conveyor belt clock is one clock, compared to two synced clocks in the axle's frame.  **No calibration is done**:  The conveyor belt bears less time, which shows up in the axle frame as a slow clock.
	2. Correct in the **axle IRF**: The conveyor belt clock is one clock, compared to two synced clocks in the axle's frame.  The conveyor belt clock bears less time, which means it **needs to be calibrated** fast in order to show the correct time in the axle IRF.
- Question 2:  What is our scale of the rulers on the conveyor?  Our two main options are:
	1. Correct in the **conveyor IRF**: (Calibration not performed)  These conveyor belt rulers will be contracted in the axle IRF
	2. Correct in the **axle IRF**:  (Calibration performed) These rulers will be stretched in the conveyor IRF.
- Question 3: How do we synchronize the clocks?
	1. Synchronized in the conveyor frame: (Clocks will appear desynced in axle frame)
	2. Synchronized in the axle frame: (Clocks will appear desynced in conveyor belt frame)



| Transformation                         | Q1: Clock Speed | Q2: Lengths | Q3: Desynch-ronization | Sagnac                       |
| -------------------------------------- | --------------- | ----------- | ---------------------- | ---------------------------- |
| [[Galilean Transformation]]            | Axle            | Axle        | Axle                   | [[Head Turning Coordinates]] |
| [[Sagnac Transformations of E J Post]] | Conveyor        | Axle        | Axle                   |                              |
| [[Tangherlini Transformations]]        | Conveyor        | Conveyor    | Axle                   |                              |
| [[Lorentz Transformations]]            | Conveyor        | Conveyor    | Conveyor               | [[Spin Local Coordinates]]   |

Once all of these choices have been made with regards to the clocks and rulers on the conveyor belt, parallel transport is as simple as rolling the rim along the belt without slipping, and transferring clock-times and ruler measures to the rim.  

What will happen?  Well, for one thing, after the wheel rolls for one revolution, there may be one or two disagreements.  One disagreement that will *definitely* be there, is that once the rim observer copies his ruler measurement, there will be a *different* ruler measurement the second time around.  No one balks at this problem, because everyone knows that you repeat the same point in space every time you go around in a circle. 

With regards to synchronization, if Axle synchronization is selected, then nothing strange will happen.  

But if conveyor synchronization is selected, then the conveyor clock will not match up with the already-set rim-clock when the rim clock rolls over the conveyor the second and third time around etc.  

# Conclusion

After one circumference, the ruler carries the label $2\pi r$. After two circumferences, it carries $4\pi r$ After three, $6\pi r$.  Nobody interprets this as a contradiction because everyone recognizes that a circular path revisits the same spatial location repeatedly while accumulating additional distance.

The synchronization gap can be viewed in exactly the same way. A clock transported around the rim accumulates an additional time offset each time the synchronization convention is carried through another complete circuit. The appearance of multiple time labels at a single location is no more surprising than the appearance of multiple distance labels. In both cases the quantity being accumulated is path dependent, and the repeated return to the same point should not by itself be mistaken for a logical inconsistency.

