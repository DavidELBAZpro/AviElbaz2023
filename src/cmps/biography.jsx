import { biographyContent } from '../data/biography'

export function Biography() {
  return (
    <div id="bio" className="bio-section">
      <div className="bio-container">
        <h2 className="bio-title">Biographie</h2>
        <p>{biographyContent}</p>
      </div>
    </div>
  )
}
