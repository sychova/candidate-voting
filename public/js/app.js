let ids
const candidateId = document.getElementById('candidateIdI')

candidateId.addEventListener('input', () => {
  const candidateExists = ids.includes(parseInt(candidateId.value))
  if (!candidateExists) {
    candidateId.setCustomValidity(
      'Sorry the candidate you provided does not exist.',
    )
  } else {
    candidateId.setCustomValidity('')
  }
})

const getCandidatesIds = async () => {
  const response = await fetch('candidatesIds')
  ids = await response.json()
  return ids
}

const getCandidatesVotes = async () => {
  const response = await fetch('/candidatesVotes')
  const candidates = await response.json()
  document.getElementById('candidatesTable').innerHTML =
    tableBuilder(candidates)
}

const tableBuilder = (data) => {
  let candidatesRows = ''
  for (i = 0; i < data.length; i++) {
    candidatesRows += `
		<tr>
			<td>
				<img src='${data[i].attr.imagePath}' alt='Candidate photo' class='img-thumbnail'/>
			</td>
			<td>
				<p>
					<span>${data[i].attr.firstName}</span>
					<span>${data[i].attr.lastName}</span>
				</p>
				<p>
					<span>Voting code: ${data[i].attr.id}</span>
				</p>
			</td>
			<td>
				<p>${data[i].votePercentage}</p>
			</td>
		</tr>`
  }
  return candidatesRows
}

const initEvents = () => {
  getCandidatesVotes()
  getCandidatesIds()
}

document.addEventListener('DOMContentLoaded', initEvents)
