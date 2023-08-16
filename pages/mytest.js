export async function getServerSideProps() {
  let data = process.env.testsetting;
  if (!data) {
    data = null;
  }
  return { props: { data } };
}

export default function Test({ data }) {
  return (
    <div>
      <h1 className="SSR Test Page">
        Welcome to <a href="https://nextjs.org">Next.js</a>! The setting data is {data}
      </h1>
    </div>
  );
}
