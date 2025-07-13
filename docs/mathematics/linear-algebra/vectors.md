# Vectors

Vectors are mathematical objects that represent quantities with both **magnitude** and **direction**. In game development, they are used for modeling physical quantities like velocity and force, computing positions and displacements, and defining geometry in both 2D and 3D spaces.

:::tip
See the [Further Reading](/mathematics/further-reading#vectors) section for links on vector spaces, inner product spaces, and other foundational topics.
:::

:::info Points vs. Vectors
In geometry and physics, it's crucial to distinguish between a **point** and a **vector**:
- A **Point** represents a *location* in space (an element of an [Affine Space](./affine-space)).
- A **Vector** represents a *displacement* or *direction* (an element of a Vector Space).

The distinction is mathematically significant: you can get a vector by subtracting two points ($\mathbf{v} = P_2 - P_1$), and you can find a new point by adding a vector to an existing point ($P_2 = P_1 + \mathbf{v}$). However, adding two points together is not a well-defined operation, as it lacks a meaningful geometric interpretation without a reference frame.
:::

## Representation

A vector in $n$-dimensional Euclidean space is an element of $\mathbb{R}^n$.

In Euclidean space, vectors are represented as an ordered list (a tuple) of real numbers. Each number corresponds to a component along a coordinate axis.

- 2D vector: $\mathbf{v} = (x, y)$
- 3D vector: $\mathbf{v} = (x, y, z)$

While they can be written as row or column vectors, graphics APIs like OpenGL, DirectX, and Vulkan conventionally use **column vectors**. 

$$
\mathbf{v} = \begin{bmatrix} x \\ y \\ z \end{bmatrix}
$$

This convention dictates that transformations are applied by pre-multiplying the vector by a [matrix](./matrices):

$$\mathbf{v}' = \mathbf{M}\mathbf{v}$$

## Basis Vectors

The components $(x, y, z)$ of a vector have meaning only in the context of a **basis**, a set of linearly independent vectors that define a coordinate system. The standard Cartesian basis vectors are mutually orthogonal and have unit length:

- $\mathbf{i} = (1, 0, 0)$: A unit vector along the X-axis.
- $\mathbf{j} = (0, 1, 0)$: A unit vector along the Y-axis.
- $\mathbf{k} = (0, 0, 1)$: A unit vector along the Z-axis.

Any vector can be expressed as a unique linear combination of these basis vectors:

$$
\mathbf{v} = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}
$$

## Operations

### Magnitude

The magnitude (or **Euclidean norm**, also called the 2-norm or $L^2$ norm) of a vector is its length. It's calculated using the Pythagorean theorem.

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

If $a$ is negative, the vector's direction is reversed. This is used in time-based motion equations (e.g., $\mathbf{v} = \mathbf{v}_0 + \mathbf{a}t$), geometric scaling, and directional control.

---

### Dot Product

The dot product (or inner product) is one of the most versatile vector operations. It takes two vectors and returns a single scalar value that measures the "agreement" or projection of one vector onto another.

It can be calculated in two ways:

:::info Geometric
$\mathbf{v} \cdot \mathbf{w} = \|\mathbf{v}\| \|\mathbf{w}\| \cos(\theta)$, where $\theta$ is the angle between the vectors.
:::

:::info Component-wise
$\mathbf{v} \cdot \mathbf{w} = v_x w_x + v_y w_y + v_z w_z$, where $v_x, v_y, v_z$ are the components of $\mathbf{v}$, and $w_x, w_y, w_z$ are the
components of $\mathbf{w}$.
:::

The sign of the dot product reveals the angle between the vectors:

$$\mathbf{v} \cdot \mathbf{w} > 0 \Rightarrow \text{angle is acute} \ (< 90^\circ)$$
$$\mathbf{v} \cdot \mathbf{w} = 0 \Rightarrow \text{vectors are orthogonal}$$
$$\mathbf{v} \cdot \mathbf{w} < 0 \Rightarrow \text{angle is obtuse} \ (> 90^\circ)$$

---

### Cross Product

:::warning 3D Only
The cross product is only defined for 3D vectors.
:::

Formally, the cross product is defined as:

$$
\times : \mathbb{R}^3 \times \mathbb{R}^3 \to \mathbb{R}^3
$$

The cross product of two 3D vectors, $\mathbf{v}$ and $\mathbf{w}$, produces a new vector that is perpendicular to the plane containing both $\mathbf{v}$ and $\mathbf{w}$.

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
- Its direction is determined by the **right-hand rule** in a right-handed coordinate system (the standard for most graphics APIs).
- It is **anti-commutative**: $\mathbf{v} \times \mathbf{w} = -(\mathbf{w} \times \mathbf{v})$.
- Its magnitude, $\|\mathbf{v} \times \mathbf{w}\| = \|\mathbf{v}\| \|\mathbf{w}\| \sin(\theta)$, is equal to the area of the parallelogram formed by the two vectors. This is useful for computing surface areas.

## Linear Interpolation

While vectors represent displacements, we often need to blend between two **points**. This is done with an affine combination known as linear interpolation (or **lerp**). Given two points $\mathbf{P}_0$ and $\mathbf{P}_1$, we can find any point on the line segment between them using a parameter $t \in [0, 1]$.

$$
\mathbf{P}(t) = (1 - t)\mathbf{P}_0 + t\mathbf{P}_1
$$

This can also be rewritten as $\mathbf{P}(t) = \mathbf{P}_0 + t(\mathbf{P}_1 - \mathbf{P}_0)$, which highlights the underlying structure: start at a point and move along a displacement vector. This formula is the foundation for many techniques in animation, pathfinding, and procedural generation.