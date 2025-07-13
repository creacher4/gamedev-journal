# Vectors

Vectors are mathematical objects that represent quantities with both **magnitude** and **direction**. In game development, they are used for modeling physical quantities like velocity and force, computing positions and displacements, and defining geometry in both 2D and 3D spaces.

:::tip
See the [Further Reading](/mathematics/further-reading#vectors) section for links on inner product spaces and vector spaces.
:::

:::info Points vs. Vectors
In geometry and physics, it's crucial to distinguish between a **point** and a **vector**:
- A **Point** represents a *location* in space (e.g., a player's coordinates).
- A **Vector** represents a *displacement* or *direction* (e.g., the direction from the player to an enemy).

You can get a vector by subtracting two points: $\mathbf{v} = P_2 - P_1$. You can find a new point by adding a vector to an existing point: $P_2 = P_1 + \mathbf{v}$. However, adding two points together is not a well-defined operation.
:::

## Representation

In Euclidean space, vectors are represented as an ordered list (a tuple) of real numbers. Each number corresponds to a component along a coordinate axis.

- 2D vector: $\mathbf{v} = (x, y)$
- 3D vector: $\mathbf{v} = (x, y, z)$

While they can be written as row or column vectors, graphics APIs like OpenGL and DirectX conventionally use **column vectors**. This convention dictates the order of matrix multiplication for transformations.

$$
\mathbf{v} = \begin{bmatrix} x \\ y \\ z \end{bmatrix}
$$

## Basis Vectors

The components $(x, y, z)$ of a vector have meaning only in the context of a **basis**, a set of fundamental vectors that define a coordinate system. The standard Cartesian basis vectors are:

- $\mathbf{i} = (1, 0, 0)$: A unit vector along the X-axis.
- $\mathbf{j} = (0, 1, 0)$: A unit vector along the Y-axis.
- $\mathbf{k} = (0, 0, 1)$: A unit vector along the Z-axis.

Any vector can be expressed as a linear combination of these basis vectors:

$$
\mathbf{v} = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}
$$

## Operations

### Magnitude

The magnitude (or **Euclidean norm**) of a vector is its length. It's calculated using the Pythagorean theorem.

$$
\|\mathbf{v}\| = \sqrt{x^2 + y^2 + z^2}
$$

This is used to compute distances, normalize vectors, and determine the speed of an object from its velocity vector.

---

### Normalization

A **normalized vector**, or **unit vector**, has a magnitude of 1. It preserves the vector's direction while discarding its length. To normalize a vector, divide it by its magnitude:

$$
\hat{\mathbf{v}} = \frac{\mathbf{v}}{\|\mathbf{v}\|}
$$

Unit vectors are essential for lighting calculations (surface normals, light directions), defining camera orientations, and representing pure direction.

---

### Addition and Subtraction

Vector addition and subtraction are performed component-wise.

$$
\mathbf{v} + \mathbf{w} = (v_x + w_x,\ v_y + w_y,\ v_z + w_z)
$$

Geometrically, this follows the **head-to-tail rule**: if you place the tail of $\mathbf{w}$ at the head of $\mathbf{v}$, the resulting vector $\mathbf{v} + \mathbf{w}$ goes from the tail of $\mathbf{v}$ to the head of $\mathbf{w}$. This is fundamental for combining forces in physics or chaining displacements in animation.

---

### Scalar Multiplication

Multiplying a vector by a scalar (a single real number) scales its magnitude.

$$
a \mathbf{v} = (a v_x,\ a v_y,\ a v_z)
$$

If $a$ is negative, the vector's direction is reversed. This is used everywhere, from applying acceleration to velocity over time ($\mathbf{v} = \mathbf{v}_0 + \mathbf{a}t$) to scaling an object's size.

---

### Dot Product

The dot product, (or inner product) is one of the most versatile vector operations. It takes two vectors and returns a single scalar value.

It can be calculated in two ways:

:::info Geometric
$\mathbf{v} \cdot \mathbf{w} = \|\mathbf{v}\| \|\mathbf{w}\| \cos(\theta)$, where $\theta$ is the angle between the vectors.
:::

:::info Component-wise
$\mathbf{v} \cdot \mathbf{w} = v_x w_x + v_y w_y + v_z w_z$, where $v_x, v_y, v_z$ are the components of $\mathbf{v}$, and $w_x, w_y, w_z$ are the
components of $\mathbf{w}$.
:::

The sign of the dot product then tells you about the angle between the vectors:

$$\mathbf{v} \cdot \mathbf{w} > 0 \Rightarrow \text{angle is acute} \ (< 90^\circ)$$
$$\mathbf{v} \cdot \mathbf{w} = 0 \Rightarrow \text{vectors are orthogonal}$$
$$\mathbf{v} \cdot \mathbf{w} < 0 \Rightarrow \text{angle is obtuse} \ (> 90^\circ)$$

#### Use Cases
- **Lighting**: Calculating diffuse light intensity based on the angle between a surface normal and a light ray.
- **Projection**: Finding the "shadow" that one vector casts onto another.
- **Culling & AI**: Checking if an object is in front of or behind another, or within a field of view.

---

### Cross Product

:::warning 3D Only
The cross product is only defined for 3D vectors.
:::

The cross product of two 3D vectors produces a new vector that is perpendicular to both of the original vectors.

$$
\mathbf{v} \times \mathbf{w} =
\begin{bmatrix}
v_y w_z - v_z w_y \\
v_z w_x - v_x w_z \\
v_x w_y - v_y w_x
\end{bmatrix}
$$

#### Properties
- The resulting vector is **orthogonal** to both $\mathbf{v}$ and $\mathbf{w}$.
- Its direction is determined by the **right-hand rule**.
- It is **anti-commutative**: $\mathbf{v} \times \mathbf{w} = -(\mathbf{w} \times \mathbf{v})$.
- Its magnitude is $\|\mathbf{v} \times \mathbf{w}\| = \|\mathbf{v}\| \|\mathbf{w}\| \sin(\theta)$, which is equal to the area of the parallelogram formed by the two vectors.

#### Use Cases
- **Surface Normals**: Calculating the normal vector of a triangle from two of its edge vectors.
- **Rotational Physics**: Computing torque via $\tau = \mathbf{r} \times \mathbf{F}$.

## Linear Interpolation

While vectors represent displacements, we often need to blend between two **points**. This is done with an affine combination known as linear interpolation (or **lerp**). Given two points $\mathbf{P}_0$ and $\mathbf{P}_1$, we can find any point on the line segment between them using a parameter $t \in [0, 1]$.

$$
\mathbf{P}(t) = (1 - t)\mathbf{P}_0 + t\mathbf{P}_1
$$

This formula is the foundation for many techniques in animation, pathfinding, and procedural generation, including Bézier curves.