import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["delay", "features", "content", "design", "pages", "weborapp"]

  submit(event) {
    event.preventDefault()

    // Ajoutez ici la logique pour traiter le formulaire, comme l'envoi d'une requête AJAX
    console.log("weborapp:", this.weborappTarget.value)
    console.log("pages:", this.pagesTarget.value)
    console.log("design:", this.designTarget.value)
    console.log("content:", this.contentTarget.value)
    console.log("features:", this.featuresTarget.value)
    console.log("delay:", this.delayTarget.value)

    // Afficher la popup (modal) après la soumission du formulaire
    const modal = new bootstrap.Modal(this.modalTarget)
    modal.show()
  }
}
