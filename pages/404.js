import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>404 - No Page Found</h1>
      <Link href="/">
        <a
          style={{
            textDecoration: 'none',
            color: 'white',
            cursor: 'pointer',
            zIndex: '100',
          }}
        >
          Go back home
        </a>
      </Link>
    </div>
  );
}
