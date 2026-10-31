// Initialize Lucide icons on page load
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    setupRoleCards();
});

// Setup click triggers for role cards
function setupRoleCards() {
    const cards = document.querySelectorAll('.role-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const roleName = card.getAttribute('data-role');
            openRoleModal(roleName);
        });
    });
}

// Open modal with role-specific prototype view
function openRoleModal(role) {
    const modal = document.getElementById('roleModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = `${role} Preview Dashboard`;
    
    let contentHTML = '';
    
    switch(role) {
        case 'Resident':
            contentHTML = `
                <p><strong>Welcome Home, Resident!</strong></p>
                <br>
                <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <li>Submit a new neighborhood maintenance ticket</li>
                    <li>Reserve the subdivision multi-purpose clubhouse</li>
                    <li>Pre-register expected visitors for quick gate clearance</li>
                    <li>Monitor live water-tank volume and quality metrics</li>
                </ul>
            `;
            break;
        case 'HOA admin':
            contentHTML = `
                <p><strong>HOA Control Panel</strong></p>
                <br>
                <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <li>Review and assign community issue tickets</li>
                    <li>Inspect gate logs and security compliance reports</li>
                    <li>Broadcast community announcements to residents</li>
                    <li>Audit maintenance and utility logs</li>
                </ul>
            `;
            break;
        case 'Guard':
            contentHTML = `
                <p><strong>Gate Guard Station Log</strong></p>
                <br>
                <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <li>Scan digital QR passes for incoming visitors</li>
                    <li>Log delivery couriers and service vehicles</li>
                    <li>View pre-approved resident guest lists</li>
                    <li>Report perimeter security incidents immediately</li>
                </ul>
            `;
            break;
        case 'Collection point':
            contentHTML = `
                <p><strong>Trash Collection & Waste Management</strong></p>
                <br>
                <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <li>Log daily garbage truck pickups per zone</li>
                    <li>Record schedule completions and delays</li>
                    <li>Flag overflowing bins or hazardous waste drop-offs</li>
                </ul>
            `;
            break;
        default:
            contentHTML = `<p>Exploring role prototype environment.</p>`;
    }

    modalBody.innerHTML = contentHTML;
    modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('roleModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside the box
window.addEventListener('click', (event) => {
    const modal = document.getElementById('roleModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Mock Login Handler
function handleLogin() {
    const email = document.getElementById('email').value;
    alert(`Login prototype submitted for: ${email}\n(Authentication backend coming soon!)`);
}