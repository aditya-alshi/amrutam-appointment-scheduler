
export function listOfAppoints({ startTime, endTime, duration }: {
    startTime: number,
    endTime: number,
    duration: number
}): string[] {
    let beginFrom = (startTime * 60);
    const endAt = (endTime * 60);
    let appointments: string[] = []

    while (beginFrom <= endAt) {
        const appointHours = Math.trunc(beginFrom / 60);
        const appointMinutes = beginFrom % 60;
        appointments.push(`${appointHours} : ${appointMinutes}`)
        beginFrom += duration;
    }

    return appointments;
}