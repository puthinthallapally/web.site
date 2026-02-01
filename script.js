gsap.timeline()
  .from(".name", {
    scale: 0.8,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out"
  })
  .to(".name", {
    opacity: 0,
    y: -50,
    duration: 1
  })
  .to("#intro", {
    opacity: 0,
    display: "none"
  });
const lenis = new Lenis({
  smooth: true,
  lerp: 0.08
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

gsap.from(".card", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".card",
    start: "top 80%"
  }
})

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ alpha: true })

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.SphereGeometry(1, 32, 32)
const material = new THREE.MeshBasicMaterial({ wireframe: true })
const sphere = new THREE.Mesh(geometry, material)

scene.add(sphere)
camera.position.z = 3

function animate() {
  requestAnimationFrame(animate)
  sphere.rotation.y += 0.002
  renderer.render(scene, camera)
}
animate()

