import dayjs from "dayjs"

/** Human-readable date, e.g. "Jul 13, 2026". Returns "No Date" for missing/invalid input. */
export const formatDate = (date?: string | null): string => {
    if (!date) return "No Date"
    const d = dayjs(date)
    return d.isValid() ? d.format("MMM D, YYYY") : "No Date"
}

/** ISO 8601 string for the <time dateTime> attribute. Returns "" for missing/invalid input. */
export const toISODate = (date?: string | null): string => {
    if (!date) return ""
    const d = dayjs(date)
    return d.isValid() ? d.toISOString() : ""
}
