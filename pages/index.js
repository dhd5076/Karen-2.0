import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Transform Your Kitchen</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    </>
  )
}
