// Calcule l'age de la personne en fonction de sa date de naissance
export default function AgeFilter (birthdate) {
  let [ year, month, day ] = birthdate.split('-')
  let dateTime = new Date(year, month, day).getTime()
  return Math.floor(
    (Date.now() - dateTime) / (365.25 * 24 * 60 * 60 * 1000)
  )
}
