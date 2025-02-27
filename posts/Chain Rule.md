*Not to be confused with [[Chain Rule (Probability)]]*


If$f(x) = g(h(x))$, then$f'(x) = g'(h(x)) \cdot h'(x)$.

alternatively
$𝑦=𝑓(𝑢)$ and $𝑢=𝑔(𝑥)$

i.e. $𝑦=𝑓(𝑔(𝑥))$

$$\frac{𝑑}{𝑑𝑥}[𝑓(𝑔(𝑥))]=𝑓'(𝑔(𝑥))𝑔'(𝑥)$$
**Chain Rule extended**
   - If $𝑦=𝑓(𝑔(ℎ(𝑥)))$:

$$\frac{𝑑}{𝑑𝑥}[𝑓(𝑔(ℎ(𝑥)))]=𝑓′(𝑔(ℎ(𝑥)))𝑔′(ℎ(𝑥))ℎ′(𝑥)$$

### Partial

**Chain Rule with two independent variables**
   - $𝑥=𝑔(𝑢,𝑣)$ and $𝑦=ℎ(𝑢,𝑣)$ and $𝑧=𝑓(𝑥,𝑦)$
   - i.e. $𝑧=𝑓(𝑔(𝑢,𝑣),ℎ(𝑢,𝑣))$

$$\frac{∂𝑧}{∂𝑢}=\frac{∂𝑧}{∂𝑥}\frac{∂𝑥}{∂𝑢}+\frac{∂𝑧}{∂𝑦}\frac{∂𝑦}{∂𝑢}$$

- and

$$\frac{∂𝑧}{∂𝑣}=\frac{∂𝑧}{∂𝑥}\frac{∂𝑥}{∂𝑣}+\frac{∂𝑧}{∂𝑦}\frac{∂𝑦}{∂𝑣}$$