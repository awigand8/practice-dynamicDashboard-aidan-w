function DynamicDashboard() {
    const userName = "Greg";

    let isPremiumUser = true;

    const tasks = [
        { taskName: "Homework", completed: false },
        { taskName: "Laundry", completed: true },
        { taskName: "Workout", completed: true },
    ];

    const currentDate = new Date().toLocaleDateString();

    const completedCount = tasks.filter((task) => task.completed).length;
    const incompleteCount = tasks.filter((task) => !task.completed).length;

    return (
        <div className="container">

            <p>{currentDate}</p>

            <h1>Welcome, {userName}!</h1>

            <ul>
                {isPremiumUser ? (<p>Thank you for
                    being a premium member!</p>) : (<p>Upgrade to premium to enjoy exclusive
                        features!</p>)}

                <h2>Your Tasks</h2>
                {tasks.map((task, index) => (
                    <li key={index} style={{ color: task.completed ? "green" : "red", }}>
                        {task.completed ? "✅" : "❌"} {task.taskName}
                    </li>
                ))}
            </ul>
            <p>✅ Completed Tasks: {completedCount}</p>
            <p>❌ Incomplete Tasks: {incompleteCount}</p>
        </div>
    );
}

export default DynamicDashboard;