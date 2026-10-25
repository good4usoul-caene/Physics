Rather than jumping into complex mathematical language to describe Parallel Transport, I will point to an example.

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
| [[Lorentz Transformations]]            | Coveyor         | Conveyor    | Conveyor               | [[Spin Local Coordinates]]   |
