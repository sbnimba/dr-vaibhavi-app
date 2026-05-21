$files = Get-ChildItem -Recurse -Path ".\src\app" -Include "page.tsx" | Where-Object { $_.FullName -notmatch "\\app\\page\.tsx" -and $_.FullName -notmatch "\\admin\\" }

foreach ($file in $files) {
    $c = [System.IO.File]::ReadAllText($file.FullName)
    $orig = $c

    # Fix the uppercase issue on the header role
    # The current line looks like: <p className="text-[10px] sm:text-xs text-primary-600 font-bold tracking-widest uppercase">Consultant Obstetrician &amp; Gynecologist</p>
    $c = $c -replace 'tracking-widest uppercase">Consultant', 'tracking-widest">Consultant'
    $c = $c -replace 'tracking-widest uppercase">MS OBGY', 'tracking-widest">MS OBGY'
    
    # Just in case other color variations like teal-600 exist:
    $c = $c -replace 'uppercase">Consultant', '">Consultant'

    # Fix image paths. It could be src="/images/doctor-hero-hd.jpg" or src="images/doctor-hero-hd.jpg"
    $c = $c -replace 'src="/images/doctor-hero-hd\.jpg"', 'src="/dr-vaibhavi-clinic/images/doctor-hero-hd.jpg"'
    $c = $c -replace 'src="images/doctor-hero-hd\.jpg"', 'src="/dr-vaibhavi-clinic/images/doctor-hero-hd.jpg"'

    if ($c -ne $orig) {
        [System.IO.File]::WriteAllText($file.FullName, $c)
        Write-Host "Updated: $($file.Name) in $($file.Directory.Name)"
    }
}
Write-Host "All done!"
