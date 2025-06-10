import data from "@/data/skills.json";

export default function Skills() {
    const skills: string[] = data.skills;

    return (
        <section className="flex flex-wrap gap-2">
            {skills.map((skill, id) => (
                <div key={id} className="bg-gray-100 dark:bg-neutral-800 rounded-md px-3 py-1 text-sm text-center shadow-sm w-fit" >
                    {skill}
                </div>
            ))}
        </section>
    );
}