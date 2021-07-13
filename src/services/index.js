export const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
export const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY

export const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/watch?`

export const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }