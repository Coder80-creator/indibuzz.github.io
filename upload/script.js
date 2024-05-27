document.addEventListener('DOMContentLoaded', function() {
    var uploadFormContainer = document.getElementById('uploadFormContainer');
    var blogBtn = document.getElementById('blogBtn');
    var thoughtsBtn = document.getElementById('thoughtsBtn');
    var photoBtn = document.getElementById('photoBtn');
    var videoBtn = document.getElementById('videoBtn');
    var prevBtns = document.querySelectorAll('#prevBtn');
    var nextBtns = document.querySelectorAll('#nextBtn');
    var uploadBtn = document.getElementById('uploadBtn');
    var steps = document.querySelectorAll('.step');
    var currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach(function(step, index) {
            step.style.display = index === stepIndex ? 'block' : 'none';
        });
    }

    function showButtons(showBack, showNext, showUpload) {
        prevBtns.forEach(function(btn) {
            btn.style.display = showBack ? 'inline-block' : 'none';
        });
        nextBtns.forEach(function(btn) {
            btn.style.display = showNext ? 'inline-block' : 'none';
        });
        uploadBtn.style.display = showUpload ? 'inline-block' : 'none';
    }

    function resetForm() {
        document.getElementById('uploadForm').reset();
        currentStep = 0;
        showStep(currentStep);
        showButtons(false, true, false);
    }

    function goToPreviousStep() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
            showButtons(currentStep !== 0, true, false);
        }
    }

    blogBtn.addEventListener('click', function() {
        resetForm();
        uploadFormContainer.style.display = 'block';
        currentStep++;
        showStep(currentStep);
        showButtons(true, true, false);
    });

    thoughtsBtn.addEventListener('click', function() {
        resetForm();
        uploadFormContainer.style.display = 'block';
        currentStep++;
        showStep(currentStep);
        showButtons(true, true, false);
    });

    photoBtn.addEventListener('click', function() {
        resetForm();
        uploadFormContainer.style.display = 'block';
        currentStep++;
        showStep(currentStep);
        showButtons(true, true, false);
    });

    videoBtn.addEventListener('click', function() {
        resetForm();
        uploadFormContainer.style.display = 'block';
        currentStep++;
        showStep(currentStep);
        showButtons(true, true, false);
    });

    nextBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
                showButtons(true, currentStep < steps.length - 1, currentStep === steps.length - 1);
            }
        });
    });

    prevBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            goToPreviousStep();
        });
    });

    uploadBtn.addEventListener('click', function() {
        // Handle upload here
    });
});
