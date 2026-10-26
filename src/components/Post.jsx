export default function Post({ title, body }) {
  return (
    <article style={{ border: '1px solid #ccc', margin: '10px 0', padding: '12px', borderRadius: '6px' }}>
      <h3 style={{ textTransform: 'capitalize', marginTop: 0 }}>{title}</h3>
      <p style={{ marginBottom: 0 }}>{body}</p>
    </article>
  );
}