export default async function StudentPage({ params }) {
  const { student } = await params;

  return (
    <div>
      <h1>Details of Student</h1>
      <p>Student ID is: {student}</p>
    </div>
  );
}