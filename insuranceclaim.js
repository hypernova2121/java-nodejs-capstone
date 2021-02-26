class InsuranceClaim {

    constructor(dateOfClaim, claimNumber, description, claimApproved='No', insured, vehicle) {
        this.dateOfClaim = dateOfClaim
        this.claimNumber = claimNumber
        this.description = description || 'N/A'
        this.claimApproved = claimApproved
        this.insured = insured
        this.vehicle = vehicle
    }

    toHTML() {
        return (
            `
            Customer Name: ${this.insured.firstName} ${this.insured.lastName}  (${this.insured.emailAddress})<br>
            Vehicle: ${this.vehicle.year} ${this.vehicle.make} ${this.vehicle.model}<br>
            Date of claim: ${this.dateOfClaim}<br>
            Claim Number: ${this.claimNumber}<br>
            Description: ${this.description}<br>
            Claim Approved?: ${this.claimApproved}<br><br>
            <div><a href="/">Go Home</a></div>
            `
        )
    }
}

module.exports = InsuranceClaim