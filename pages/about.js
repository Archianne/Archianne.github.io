import Link from 'next/link'
export default function About() {
  return (
    <div>
      <div>About us</div>
      <div>
        Bacsadasdasdasdasdk to{' '}
        <Link href="/" as={process.env.BACKEND_URL + '/'}>
          <a>asd</a>
        </Link>
      </div>
    </div>
  )
}
