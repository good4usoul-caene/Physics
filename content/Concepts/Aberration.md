
In the 1720's, James Bradley (1692-1762) set out to measure stellar parallax 

[Parallax | Desmos](https://www.desmos.com/calculator/ohaciyhnbg)

but instead discovered the aberration of light, a subtle annual shift in star position caused by Earth's motion.  He never found any evidencee of parallax with the instruments of his time.

The star, $\gamma$-Draconis was directly overhead in London.  Over several years, he measured a motion of about 20 arcseconds.  Now this is quite large.  A star just 1 Parsec away (3.26 light years) ought move only 1 arc-second due to parallax--IF it's lined up in the plane where earth orbits.  A parallax drift of 20 arcseconds would be 20 times closer than that.  

There were other problems with the 20 arc-second shift.  
1. It was in the wrong direction.  The angle was at maximum when it should have been at minimum and vice versa.
2. Every star in the same direction was affected by the same shift.

# Galilean Analogy

The Galilean Analogy invokes rainfall.  If you're standing in the rainstorm, the rainfall falls straight downward.  If you're moving very quickly, the rainfall comes down at an angle.  

Here's the big question.  Is it an illusion?  Did $\gamma$-Draconis move?  We now know that it is **154.3** light-years from earth.  20 arcseconds is $$20\text { seconds}*\frac{1\text{ minute}}{60 \text { seconds}}*\frac{1\text{ degree}}{60 \text { minutes}}*\frac{\pi\text{ radians}}{180 \text { degrees}}$$
$$=9.7\times10^{-5}\text{ radians}$$ So from our [[point-of-view]], the star moved $$s=r \theta = 0.01496\text{ light years}$$
But it didn't move this far by traveling.  It moved this far by way of our change of perspective.  

# Application of the Galilean Transformation

We will assume that from one [[Point-of-View]], the [[Image Location vs Simultaneous Location|image]] of the distant star was emitted at

$$\underset{{\boxed{v=0}}}{E_{\text{image}}}=
\begin{pmatrix}t_{\text{image}}(0)\\x_{\text{image}}(0)\\y_{\text{image}}(0)\end{pmatrix}=\begin{pmatrix}-y/c\\0\\y\end{pmatrix}
$$
A Galilean transformation will not affect **what** image is currently being observed, but it will affect the coordinates **where** that image ~~appears to be~~ **actually emanated from** based on the different state of the observer.


$$\underset{{\boxed{v}}}{E_{\text{image}}}=
\begin{pmatrix}t_{\text{image}}(v)\\x_{\text{image}}(v)\\y_{\text{image}}(v)\end{pmatrix}=\begin{pmatrix}1&0&0\\-v&1&0\\0&0&1\end{pmatrix}\begin{pmatrix}-y/c\\0\\y\end{pmatrix}
\\=\begin{pmatrix}-y/c\\vy/c\\y\end{pmatrix}
$$

For our example: $y=154.3$ light years, 

$$
v_{earth}=\pm 29.78\text{ km/s}
\\c=300\times 10^3\text{ km/s}=1\text{ ly/y}
\\\pm v/c=\pm 99.2\times 10^{-6}
$$.
The location of the image (and where the distant star was when it produced the image) was:

$$\begin{pmatrix}y/c\\\pm vy/c\\y\end{pmatrix}=\begin{pmatrix}-154.3\text{ years ago}\\
\overset{144.7\times10^{9}{\text{ km}}}{{\pm .0153\text{ light years}}}\\154.3 \text{ light years}\end{pmatrix}$$

We can calculate also 
$$
\theta=\frac{\Delta s}{r}=\frac{\Delta x}{\Delta y}=\pm\frac{.0153}{154.3}=\pm 99.2\times 10^{-6}\text{ rad}
$$
$$
\pm 99.2\times 10^{-6}\text{ rad}\cdot \frac{180^\degree}{\pi\text{ rad}}\frac{3600''}{1\degree}
=\pm 20.5''$$
This angle-change should apply to every star in the sky, regardless of distance.

The location where the star was when it emitted the image changes under [[Galilean Transformation]].  One might say "this is an illusion" but care should be taken to [[Seek Positive Explanations]].   The coordinates of the event where Draconis is expected to be now is not moved at all under the Galilean Transformation.

$$E_\overset{\gamma-\text{Draconis}}{\text{now}}=\begin{pmatrix}t=0\\x=0\\y=154.3 \text{ ly}\end{pmatrix}$$   However, since we will not see this event for 154 years, we cannot even actually say whether the star actually *is* at that location at all.  

But our perspectival change actually represents an actual change in our past.  The star that was moving right from a position to our left is now moving left from a position to our right.  Nothing has changed but our perspective.  See [[Perspective is Real]].  

Also see [[Image Location vs Simultaneous Location]]) 
